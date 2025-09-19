'use client';

import { useEffect, useRef, useState } from 'react';
import { IImageUploaderProps } from './image-uploader.model';
import { CloseIcon, PlusIcon } from '../icons';
import cl from './image-uploader.module.scss';

export const ImageUploader = ({
	className = '',
	onChangeImage,
	onClear,
	defaultValue,
}: IImageUploaderProps) => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const refInput = useRef<HTMLInputElement | null>(null);
	const refInit = useRef(false);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setSelectedFile(file);
			setPreviewUrl(URL.createObjectURL(file));
			onChangeImage(file);
		}
	};

	const handleFileClear = () => {
		setSelectedFile(null);
		setPreviewUrl(null);
		if (refInput.current) {
			refInput.current.value = '';
		}
		onChangeImage(null);
		if (onClear) onClear();
	};

	const isImageStatic = previewUrl && selectedFile;

	useEffect(() => {
		if (defaultValue && !refInit.current) {
			setPreviewUrl(defaultValue);
		}
		refInit.current = true;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className={
				cl.main +
				' ' +
				className +
				' ' +
				(isImageStatic || previewUrl ? cl.show : '')
			}
		>
			<input
				style={{ display: 'none' }}
				ref={refInput}
				type="file"
				accept="image/*"
				onChange={handleFileChange}
			/>
			<div
				className={cl.upload}
				onClick={() => refInput?.current?.click()}
			>
				<PlusIcon />
			</div>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				className={
					cl.image + ' ' + (isImageStatic || previewUrl ? cl.show : '')
				}
				src={previewUrl || '/images/assets/manager.png'}
				alt="Предпросмотр"
				style={{ maxWidth: '100%', maxHeight: 200 }}
			/>
			<div
				onClick={handleFileClear}
				role="button"
				className={
					cl.close + ' ' + (isImageStatic || previewUrl ? cl.show : '')
				}
			>
				<CloseIcon />
			</div>
		</div>
	);
};
