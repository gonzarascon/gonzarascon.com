import { twMerge } from "tw-merge";
import cx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
	return twMerge(cx(inputs));
}
