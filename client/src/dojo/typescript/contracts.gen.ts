import { DojoProvider, DojoCall } from "@dojoengine/core";
import { Account, AccountInterface, BigNumberish, CairoOption, CairoCustomEnum, ByteArray } from "starknet";
import * as models from "./models.gen";

export function setupWorld(provider: DojoProvider) {

	const build_shooter_endGame_calldata = (gameId: BigNumberish, won: boolean): DojoCall => {
		return {
			contractName: "shooter",
			entrypoint: "end_game",
			calldata: [gameId, won],
		};
	};

	const shooter_endGame = async (snAccount: Account | AccountInterface, gameId: BigNumberish, won: boolean) => {
		try {
			return await provider.execute(
				snAccount,
				build_shooter_endGame_calldata(gameId, won),
				"full_starter_react",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_shooter_shootTarget_calldata = (gameId: BigNumberish, hitRealTarget: boolean): DojoCall => {
		return {
			contractName: "shooter",
			entrypoint: "shoot_target",
			calldata: [gameId, hitRealTarget],
		};
	};

	const shooter_shootTarget = async (snAccount: Account | AccountInterface, gameId: BigNumberish, hitRealTarget: boolean) => {
		try {
			return await provider.execute(
				snAccount,
				build_shooter_shootTarget_calldata(gameId, hitRealTarget),
				"full_starter_react",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_shooter_startGame_calldata = (): DojoCall => {
		return {
			contractName: "shooter",
			entrypoint: "start_game",
			calldata: [],
		};
	};

	const shooter_startGame = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_shooter_startGame_calldata(),
				"full_starter_react",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};



	return {
		shooter: {
			endGame: shooter_endGame,
			buildEndGameCalldata: build_shooter_endGame_calldata,
			shootTarget: shooter_shootTarget,
			buildShootTargetCalldata: build_shooter_shootTarget_calldata,
			startGame: shooter_startGame,
			buildStartGameCalldata: build_shooter_startGame_calldata,
		},
	};
}