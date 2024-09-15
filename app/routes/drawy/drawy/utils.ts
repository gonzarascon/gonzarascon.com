import cx, { type ClassValue } from "clsx";
import { twMerge } from "tw-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(cx(inputs));
}
