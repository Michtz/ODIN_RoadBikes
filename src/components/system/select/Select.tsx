'use client';
import { forwardRef, useState, useEffect, useRef, useCallback } from 'react';
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
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isApple, setIsApple] = useState<boolean>(true);
    const [internalValue, setInternalValue] = useState<string>('');
    const containerRef = useRef<HTMLDivElement>(null);
    const selectRef = useRef<HTMLSelectElement | null>(null);

    useEffect(() => {
      const platform: string = navigator.userAgent.toLowerCase();
      setIsApple(/iphone|ipad|ipod|macintosh/.test(platform));

      const handleClickOutside = (event: MouseEvent): void => {
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

    useEffect(() => {
      const incoming: string | undefined =
        props.value !== undefined
          ? String(props.value)
          : props.defaultValue !== undefined
            ? String(props.defaultValue)
            : undefined;

      if (incoming !== undefined && incoming !== internalValue) {
        setInternalValue(incoming);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.value, props.defaultValue]);

    const handleFocus = (e: any): void => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: any): void => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const toggleDropdown = (e: any): void => {
      if (isApple || props.disabled || readOnly) return;
      e.preventDefault();
      setIsOpen((prev) => !prev);
    };

    const handleOptionClick = useCallback(
      (e: React.MouseEvent, val: string | number): void => {
        e.stopPropagation();

        if (!selectRef.current) return;
        setInternalValue(String(val));
        setIsOpen(false);

        const nativeValueSetter: ((v: string) => void) | undefined =
          Object.getOwnPropertyDescriptor(
            HTMLSelectElement.prototype,
            'value',
          )?.set;
        nativeValueSetter?.call(selectRef.current, String(val));
        selectRef.current.dispatchEvent(new Event('change', { bubbles: true }));
      },
      [],
    );

    const selectedOption: SelectOption | undefined = options.find(
      (opt) => String(opt.value) === internalValue,
    );
    const displayLabel: string = selectedOption
      ? selectedOption.label
      : (placeholder ?? '');

    const selectClasses: string = [
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

    const containerClasses: string = [
      style.selectContainer,
      fullWidth && style.fullWidth,
      error && style.error,
      isFocused && style.focused,
      readOnly && style.readOnly,
      isOpen && style.isOpen,
    ]
      .filter(Boolean)
      .join(' ');

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

          <select
            ref={(node) => {
              selectRef.current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref) ref.current = node;
            }}
            className={selectClasses}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={props.disabled || readOnly}
            aria-invalid={error}
            aria-describedby={
              helperText ? `${props.id ?? 'select'}-helper` : undefined
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

          {!isApple && isOpen && (
            <div className={style.customDropdown}>
              {placeholder && (
                <div
                  className={`${style.customOption} ${style.placeholder}`}
                  onClick={(e) => handleOptionClick(e, '')}
                >
                  {placeholder}
                </div>
              )}
              {options.map((option) => (
                <div
                  key={option.value}
                  className={[
                    style.customOption,
                    internalValue === String(option.value)
                      ? style.isSelected
                      : '',
                    option.disabled ? style.isDisabled : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={(e) =>
                    !option.disabled && handleOptionClick(e, option.value)
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
            id={`${props.id ?? 'select'}-helper`}
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
