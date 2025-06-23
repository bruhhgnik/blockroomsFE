import type { SchemaType as ISchemaType } from "@dojoengine/sdk";

import { BigNumberish } from 'starknet';

// Type definition for `full_starter_react::models::ammo::Ammo` struct
export interface Ammo {
	game_id: BigNumberish;
	ammo_remaining: BigNumberish;
}

// Type definition for `full_starter_react::models::ammo::AmmoValue` struct
export interface AmmoValue {
	ammo_remaining: BigNumberish;
}

// Type definition for `full_starter_react::models::elimination::Elimination` struct
export interface Elimination {
	game_id: BigNumberish;
	eliminations_count: BigNumberish;
}

// Type definition for `full_starter_react::models::elimination::EliminationValue` struct
export interface EliminationValue {
	eliminations_count: BigNumberish;
}

// Type definition for `full_starter_react::models::hostage::Hostage` struct
export interface Hostage {
	address: string;
	total_games: BigNumberish;
	games_won: BigNumberish;
}

// Type definition for `full_starter_react::models::hostage::HostageValue` struct
export interface HostageValue {
	total_games: BigNumberish;
	games_won: BigNumberish;
}

// Type definition for `full_starter_react::models::target::Target` struct
export interface Target {
	game_id: BigNumberish;
	target_id: BigNumberish;
	position_x: BigNumberish;
	position_y: BigNumberish;
	position_z: BigNumberish;
	is_fake: boolean;
	is_alive: boolean;
}

// Type definition for `full_starter_react::models::target::TargetValue` struct
export interface TargetValue {
	position_x: BigNumberish;
	position_y: BigNumberish;
	position_z: BigNumberish;
	is_fake: boolean;
	is_alive: boolean;
}

// Type definition for `achievement::events::index::TrophyCreation` struct
export interface TrophyCreation {
	id: BigNumberish;
	hidden: boolean;
	index: BigNumberish;
	points: BigNumberish;
	start: BigNumberish;
	end: BigNumberish;
	group: BigNumberish;
	icon: BigNumberish;
	title: BigNumberish;
	description: string;
	tasks: Array<Task>;
	data: string;
}

// Type definition for `achievement::events::index::TrophyCreationValue` struct
export interface TrophyCreationValue {
	hidden: boolean;
	index: BigNumberish;
	points: BigNumberish;
	start: BigNumberish;
	end: BigNumberish;
	group: BigNumberish;
	icon: BigNumberish;
	title: BigNumberish;
	description: string;
	tasks: Array<Task>;
	data: string;
}

// Type definition for `achievement::events::index::TrophyProgression` struct
export interface TrophyProgression {
	player_id: BigNumberish;
	task_id: BigNumberish;
	count: BigNumberish;
	time: BigNumberish;
}

// Type definition for `achievement::events::index::TrophyProgressionValue` struct
export interface TrophyProgressionValue {
	count: BigNumberish;
	time: BigNumberish;
}

// Type definition for `achievement::types::index::Task` struct
export interface Task {
	id: BigNumberish;
	total: BigNumberish;
	description: string;
}

export interface SchemaType extends ISchemaType {
	full_starter_react: {
		Ammo: Ammo,
		AmmoValue: AmmoValue,
		Elimination: Elimination,
		EliminationValue: EliminationValue,
		Hostage: Hostage,
		HostageValue: HostageValue,
		Target: Target,
		TargetValue: TargetValue,
	},
	achievement: {
		TrophyCreation: TrophyCreation,
		TrophyCreationValue: TrophyCreationValue,
		TrophyProgression: TrophyProgression,
		TrophyProgressionValue: TrophyProgressionValue,
		Task: Task,
	},
}
export const schema: SchemaType = {
	full_starter_react: {
		Ammo: {
			game_id: 0,
			ammo_remaining: 0,
		},
		AmmoValue: {
			ammo_remaining: 0,
		},
		Elimination: {
			game_id: 0,
			eliminations_count: 0,
		},
		EliminationValue: {
			eliminations_count: 0,
		},
		Hostage: {
			address: "",
			total_games: 0,
			games_won: 0,
		},
		HostageValue: {
			total_games: 0,
			games_won: 0,
		},
		Target: {
			game_id: 0,
			target_id: 0,
			position_x: 0,
			position_y: 0,
			position_z: 0,
			is_fake: false,
			is_alive: false,
		},
		TargetValue: {
			position_x: 0,
			position_y: 0,
			position_z: 0,
			is_fake: false,
			is_alive: false,
		},
		TrophyCreation: {
			id: 0,
			hidden: false,
			index: 0,
			points: 0,
			start: 0,
			end: 0,
			group: 0,
			icon: 0,
			title: 0,
		description: "",
			tasks: [{ id: 0, total: 0, description: "", }],
		data: "",
		},
		TrophyCreationValue: {
			hidden: false,
			index: 0,
			points: 0,
			start: 0,
			end: 0,
			group: 0,
			icon: 0,
			title: 0,
		description: "",
			tasks: [{ id: 0, total: 0, description: "", }],
		data: "",
		},
		TrophyProgression: {
			player_id: 0,
			task_id: 0,
			count: 0,
			time: 0,
		},
		TrophyProgressionValue: {
			count: 0,
			time: 0,
		},
		Task: {
			id: 0,
			total: 0,
		description: "",
		},
	},
};
export enum ModelsMapping {
	Ammo = 'full_starter_react-Ammo',
	AmmoValue = 'full_starter_react-AmmoValue',
	Elimination = 'full_starter_react-Elimination',
	EliminationValue = 'full_starter_react-EliminationValue',
	Hostage = 'full_starter_react-Hostage',
	HostageValue = 'full_starter_react-HostageValue',
	Target = 'full_starter_react-Target',
	TargetValue = 'full_starter_react-TargetValue',
	TrophyCreation = 'achievement-TrophyCreation',
	TrophyCreationValue = 'achievement-TrophyCreationValue',
	TrophyProgression = 'achievement-TrophyProgression',
	TrophyProgressionValue = 'achievement-TrophyProgressionValue',
	Task = 'achievement-Task',
}