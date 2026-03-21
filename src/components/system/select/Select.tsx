'use client';
import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import style from './Select.module.scss';
import MaterialIcon from '@/components/system/materialIcon/MaterialIcon';

interface TooltipProps {
  text: string;
  more?: React.ReactNode;
}

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface SelectProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'size'
> {
  label?: string;
  tooltip?: TooltipProps;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  readOnly?: boolean;
  inputProps?: UseFormRegisterReturn;
  startIcon?: string;
  endIcon?: string;
  options: SelectOption[];
  containerStyle?: React.CSSProperties;
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      tooltip,
      helperText,
      error = false,
      required = false,
      fullWidth = false,
      readOnly = false,
      inputProps,
      startIcon,
      endIcon = 'expand_more',
      options,
      placeholder,
      className,
      containerStyle,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isApple, setIsApple] = useState(true); // Default to true to avoid hydration mismatch
    const containerRef = useRef<HTMLDivElement>(null);
    const selectRef = useRef<HTMLSelectElement | null>(null);

    useEffect(() => {
      // Detection for Apple devices (iOS, macOS, iPadOS)
      const platform = navigator.userAgent.toLowerCase();
      const isApplePlatform = /iphone|ipad|ipod|macintosh/.test(platform);
      setIsApple(isApplePlatform);

      // Close dropdown on outside click
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const toggleDropdown = (e: React.MouseEvent) => {
      if (isApple || props.disabled || readOnly) return;
      e.preventDefault();
      setIsOpen(!isOpen);
    };

    const handleOptionClick = (val: string | number) => {
      if (selectRef.current) {
        // Trigger native change for react-hook-form
        selectRef.current.value = String(val);
        const event = new Event('change', { bubbles: true });
        selectRef.current.dispatchEvent(event);
      }
      setIsOpen(false);
    };

    const selectClasses = [
      style.select,
      error && style.error,
      fullWidth && style.fullWidth,
      isFocused && style.focused,
      readOnly && style.readOnly,
      (startIcon || endIcon) && style.hasIcons,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const containerClasses = [
      style.selectContainer,
      fullWidth && style.fullWidth,
      error && style.error,
      isFocused && style.focused,
      readOnly && style.readOnly,
      isOpen && style.isOpen,
    ]
      .filter(Boolean)
      .join(' ');

    const currentValue = props.value || props.defaultValue || '';
    const selectedOption = options.find(
      (opt) => String(opt.value) === String(currentValue),
    );
    const displayLabel = selectedOption ? selectedOption.label : placeholder;

    return (
      <div
        className={containerClasses}
        style={containerStyle}
        ref={containerRef}
      >
        {label && (
          <div className={style.labelContainer}>
            <label className={style.label}>
              {label}
              {required && <span className={style.required}>*</span>}
            </label>
            {tooltip && (
              <div className={style.tooltipContainer}>
                <MaterialIcon
                  icon="help_outline"
                  iconSize="small"
                  className={style.tooltipIcon}
                />
                <div className={style.tooltip}>
                  <div className={style.tooltipContent}>
                    {tooltip.text}
                    {tooltip.more && (
                      <div className={style.tooltipMore}>{tooltip.more}</div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className={style.selectWrapper} onClick={toggleDropdown}>
          {startIcon && (
            <MaterialIcon
              icon={startIcon}
              className={style.startIcon}
              iconSize="small"
            />
          )}

          {/* Hidden/Native Select */}
          <select
            ref={(node) => {
              selectRef.current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref) (ref as any).current = node;
            }}
            className={selectClasses}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={props.disabled || readOnly}
            aria-invalid={error}
            aria-describedby={
              helperText ? `${props.id || 'select'}-helper` : undefined
            }
            style={
              !isApple
                ? { opacity: 0, position: 'absolute', pointerEvents: 'none' }
                : {}
            }
            {...inputProps}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          {/* Custom Label UI for Non-Apple */}
          {!isApple && (
            <div className={style.customSelectLabel}>{displayLabel}</div>
          )}

          <div className={style.endIcons}>
            {endIcon && (
              <MaterialIcon
                icon={endIcon}
                className={`${style.endIcon} ${isOpen ? style.rotated : ''}`}
                iconSize="small"
              />
            )}
          </div>

          {/* Custom Dropdown Menu */}
          {!isApple && isOpen && (
            <div className={style.customDropdown}>
              {placeholder && (
                <div
                  className={`${style.customOption} ${style.placeholder}`}
                  onClick={() => handleOptionClick('')}
                >
                  {placeholder}
                </div>
              )}
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`${style.customOption} ${String(currentValue) === String(option.value) ? style.isSelected : ''} ${option.disabled ? style.isDisabled : ''}`}
                  onClick={() =>
                    !option.disabled && handleOptionClick(option.value)
                  }
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {helperText && (
          <div
            id={`${props.id || 'select'}-helper`}
            className={`${style.helperText} ${error ? style.errorText : ''}`}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  },
);

Select.displayName = 'Select';

export default Select;
