import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

type PanelsConfig = Record<string, React.ReactNode>;

const SHIFT_AMOUNT = 20;

export function createDrawy<P extends PanelsConfig>(panels: P) {
	type PanelKeys = keyof P;

	const DrawyContext = React.createContext<
		| {
				open: (panel: PanelKeys) => void;
				close: () => void;
				closeAll: () => void;
				openPanels: PanelKeys[];
		  }
		| undefined
	>(undefined);

	interface DrawyProviderProps {
		children: React.ReactNode;
		initialOpenPanels?: PanelKeys[];
	}

	const DrawyProvider: React.FC<DrawyProviderProps> = ({
		children,
		initialOpenPanels = [],
	}) => {
		const [openPanels, setOpenPanels] =
			React.useState<PanelKeys[]>(initialOpenPanels);
		const [closingPanelIndex, setClosingPanelIndex] = React.useState<
			number | null
		>(null);

		const open = (panel: PanelKeys) => {
			setOpenPanels((prevPanels) => [...prevPanels, panel]);
		};

		const close = () => {
			setClosingPanelIndex(openPanels.length - 1);
			setOpenPanels((prevPanels) => prevPanels.slice(0, -1));
		};

		const closeAll = () => {
			setOpenPanels([]);
		};

		return (
			<DrawyContext.Provider value={{ open, close, closeAll, openPanels }}>
				{children}
				{openPanels.length > 0 && (
					<Dialog.Root
						open
						onOpenChange={(isOpen) => {
							if (!isOpen) setOpenPanels([]);
						}}
					>
						<Dialog.Portal>
							<Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
						</Dialog.Portal>
					</Dialog.Root>
				)}

				{openPanels.map((panelKey, index) => {
					const shiftAmount = (openPanels.length - index - 1) * SHIFT_AMOUNT;

					const applyTransition =
						closingPanelIndex === index || closingPanelIndex === null;

					return (
						<Dialog.Root
							key={`${panelKey as string}-${index}`}
							open
							onOpenChange={(isOpen) => {
								if (!isOpen) close();
							}}
						>
							<Dialog.Portal>
								<Dialog.Content
									className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white p-6 shadow-xl overflow-y-auto transform ${
										applyTransition ? "transition-transform duration-300" : ""
									}`}
									style={{
										zIndex: 1000 + index,
										transform: `translateX(-${shiftAmount}px)`,
									}}
									onTransitionEnd={() => {
										if (closingPanelIndex === index) {
											setClosingPanelIndex(null);
										}
									}}
								>
									{panels[panelKey]}
									<Dialog.Close asChild>
										<button
											type="button"
											className="absolute top-4 right-4 text-2xl"
										>
											&times;
										</button>
									</Dialog.Close>
								</Dialog.Content>
							</Dialog.Portal>
						</Dialog.Root>
					);
				})}
			</DrawyContext.Provider>
		);
	};

	const useDrawy = () => {
		const context = React.useContext(DrawyContext);
		if (!context) {
			throw new Error("useDrawy must be used within a DrawyProvider");
		}
		return context;
	};

	return { DrawyProvider, useDrawy };
}
