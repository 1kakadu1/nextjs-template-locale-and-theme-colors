import { ChangeEvent, useEffect, useState } from 'react';
import cl from './range-slider.module.scss';

export const RangeSlider = ({
	min,
	max,
	value,
	step,
	onChange,
	className = '',
}: {
	min: number;
	max: number;
	value: { min: number; max: number };
	step: number;
	className?: string;
	onChange: (value: { min: number; max: number }) => void;
}) => {
	const [minValue, setMinValue] = useState(value ? value.min : min);
	const [maxValue, setMaxValue] = useState(value ? value.max : max);

	useEffect(() => {
		if (value) {
			setMinValue(value.min);
			setMaxValue(value.max);
		}
	}, [value]);

	const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const newMinVal = Math.min(+e.target.value, maxValue - step);
		if (!value) setMinValue(newMinVal);
		onChange({ min: newMinVal, max: maxValue });
	};

	const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const newMaxVal = Math.max(+e.target.value, minValue + step);
		if (!value) setMaxValue(newMaxVal);
		onChange({ min: minValue, max: newMaxVal });
	};

	const minPos = ((minValue - min) / (max - min)) * 100;
	const maxPos = ((maxValue - min) / (max - min)) * 100;

	return (
		<div className={cl['wrapper'] + ' ' + className}>
			<div className={cl['input-wrapper']}>
				<input
					className={cl['input']}
					type="range"
					value={minValue}
					min={min}
					max={max}
					step={step}
					onChange={handleMinChange}
				/>
				<input
					className={cl['input']}
					type="range"
					value={maxValue}
					min={min}
					max={max}
					step={step}
					onChange={handleMaxChange}
				/>
			</div>

			<div className={cl['control-wrapper']}>
				<div
					className={cl['control']}
					style={{ left: `${minPos}%` }}
				/>
				<div className={cl['rail']}>
					<div
						className={cl['inner-rail']}
						style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
					/>
				</div>
				<div
					className={cl['control']}
					style={{ left: `${maxPos}%` }}
				/>
			</div>
		</div>
	);
};
