import { describe, expect, test } from '@jest/globals';
import MigrosAPI from "../src";
import { IProductCardsOptions } from "../src/api/product-display/public/v1/product-cards";

describe('Search for a Product Card', () => {
	test('Search for salt', async () => {
		const productCardsOptions: IProductCardsOptions = {
			uids: "100001090"
		}
		const response = await MigrosAPI.productDisplay.v1.productCards.get(productCardsOptions)
		expect(response[0].name).toBe("Kochsalz");
		expect(response[0].brand).toBe("Jura-Sel");
	});
	test('Search for bread', async () => {
		const productCardsOptions: IProductCardsOptions = {
			uids: "100005521"
		}
		const response = await MigrosAPI.productDisplay.v1.productCards.get(productCardsOptions)
		expect(response[0].name).toBe("Helles Weizenbrot");
		expect(response[0].brand).toBe("M-Classic");
	});
});

describe('Search for multiple Product Cards', () => {
	test('Search for multiple salts', async () => {
		const productCardsOptions: IProductCardsOptions = {
			uids: ["100001090", "100047383"]
		}
		const response = await MigrosAPI.productDisplay.v1.productCards.get(productCardsOptions)
		expect(response[0].name).toBe("Kochsalz");
		expect(response[0].brand).toBe("Jura-Sel");
		expect(response[1].name).toBe("Speisesalz");
		expect(response[1].brand).toBe("Jura-Sel");
	});
	test('Search for multiple breads', async () => {
		const productCardsOptions: IProductCardsOptions = {
			uids: ["100005521", "100032626"]
		}
		const response = await MigrosAPI.productDisplay.v1.productCards.get(productCardsOptions)
		expect(response[0].name).toBe("Helles Weizenbrot");
		expect(response[0].brand).toBe("M-Classic");
		expect(response[1].name).toBe("Toastbrot");
		expect(response[1].brand).toBe(undefined);
	});
});