export interface IImageUploaderProps {
	className?: string;
	onChangeImage: (file: File | null) => void;
	onClear?: () => void;
	defaultValue?: string;
}

export type ImageUploadStatus = 'idle' | 'uploading' | 'success' | 'error';
