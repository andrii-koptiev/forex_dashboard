export interface AppError {
  error: Error & { digest?: string };
  reset: () => void;
}
