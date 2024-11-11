import Replicate from "replicate";
const replicate = new Replicate({
	auth: process.env.REPLICATE_API_TOKEN,
});

const pokemonTypeMapping = {
	fire: {
		color: "red orange",
		energyLogo: "flame icon",
	},
	water: {
		color: "blue",
		energyLogo: "water drop icon",
	},
	grass: {
		color: "green",
		energyLogo: "leaf icon",
	},
	electric: {
		color: "yellow",
		energyLogo: "lightning bolt icon",
	},
	psychic: {
		color: "purple",
		energyLogo: "eye icon",
	},
	dark: {
		color: "dark gray",
		energyLogo: "crescent moon icon",
	},
	fighting: {
		color: "brown",
		energyLogo: "fist icon",
	},
	steel: {
		color: "silver",
		energyLogo: "metal plate icon",
	},
	fairy: {
		color: "pink",
		energyLogo: "star icon",
	},
	dragon: {
		color: "orange",
		energyLogo: "dragon tail icon",
	},
	normal: {
		color: "beige",
		energyLogo: "star icon",
	},
};

const model = process.env.MODEL_NAME;

export type PokemonType = keyof typeof pokemonTypeMapping;

export async function generateImage({
	promptText,
	type,
	name,
}: {
	promptText: string;
	type: PokemonType;
	name: string;
}) {
	if (!model) {
		throw new Error("Model name is required");
	}

	// Spell out the name letter by letter
	const spelledName = name.split("").join(" ");

	const prompt = `
	Create a highly detailed, official-looking Pokémon Trading Card Game (PTCG) card featuring a custom ${type}-type Pokémon. **The critical element is that the Pokémon's name "${name}" appears clearly and fully spelled out at the top center of the card. This placement is mandatory.**

**Card Specifications:**

- **Name of Pokémon:** "${name}" (spelled as: ${spelledName})
  - **Placement and Clarity Requirement:** The text "${name}" **must be displayed at the top center of the card, fully spelled out, with no extra characters or missing letters.** Ensure it is clear, prominent, and the largest text at the top of the card. **This placement and clarity are essential.**
- **Card Frame and Background Color:** ${pokemonTypeMapping[type].color}
- **Top Left Corner Text:** "Basic"
- **Top Right Corner:**
  - Display "HP60" clearly.
  - Include ${type} type icon next to "HP60", shown as a ${pokemonTypeMapping[type].energyLogo}.
- **Illustration:**
  - An image of ${name}, ${promptText}.
- **Additional Details:**
  - **Pokédex Info:** Display "NO. ???", "HT: 1'2\"", "WT: 15 lbs." directly beneath the illustration.
  - **Attack Section:**
    - Attack Name: "Mighty Power"
    - Cost: One dark-type energy icon
    - Damage: 40 (aligned to the right)
    - Description: "${name} channels energy, summoning a sudden burst of light shaped like tiny cheese wedges."
  - **Bottom Icons:**
    - Weakness: Fighting-type symbol with "×2"
    - Resistance: None
    - Retreat Cost: One colorless energy (white star shape)
  - **Flavor Text:** "This mischievous cat roams the neon alleys, crafting spells that blur the line between playful tricks and powerful sorcery."
  - **Footer Details:**
    - Bottom Left: "Illus. Gonzalo"
    - Bottom Right: "032/165"
    - Centered at the bottom edge: "QUE-SITOS"

**Key Requirements:**

- **Prominent Name Rendering:** The **name "${name}" must be the largest and clearest text at the top center of the card**. Ensure it is entirely visible, without any distortion, omissions, or extra characters.
- **Legibility and Accuracy:** All text must be fully legible, accurate, and properly positioned.
- **Visual Quality:** The card should match the high quality of official Pokémon cards with detailed visuals.
- **Compliance:** **Failure to display the Pokémon's name as specified will result in an incorrect image.**

**Remember: The clarity and correct placement of the Pokémon's name "${name}" at the top center are crucial.**


`;

	const modelPattern = /^(\w+\/[\w-]+)(:\w+)?$/;

	function isValidModelName(
		model: string,
	): model is `${string}/${string}` | `${string}/${string}:${string}` {
		return modelPattern.test(model);
	}

	if (!isValidModelName(model)) {
		throw new Error(
			"Model name must match the pattern `${string}/${string}` or `${string}/${string}:${string}`",
		);
	}

	const output = await replicate.run(model, {
		input: {
			model: "dev",
			lora_scale: 1,
			num_outputs: 1,
			aspect_ratio: "3:4",
			output_format: "webp",
			guidance_scale: 7.5, // Increased guidance scale for better adherence to the prompt
			output_quality: 90,
			prompt_strength: 0.8,
			extra_lora_scale: 1,
			num_inference_steps: 50, // Increased steps for potentially better quality
			prompt,
		},
	});

	return output;
}
