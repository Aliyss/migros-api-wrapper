import { describe, expect, test } from '@jest/globals';
// import { MigrosAPI } from "../src";
// import { IProductSupplyOptions } from "../src/api/marketablestock/product-supply";


describe('Check for a Products Supply', () => {

	test('Search for 4963004', async () => {
		/*
		const productSupplyOptions: IProductSupplyOptions = {
			pids: "4963004",
			warehouses: 1
		}
		const response = await MigrosAPI.products.productStock.getProductSupply(productSupplyOptions, ".")
		expect(response[0].infiniteSupply).toBe(false);
		expect(response[0].pid).toBe("4963004");
		 */
		expect(null).toBe(null)
	});
	test('Search for 4979976', async () => {
		/*
		const productSupplyOptions: IProductSupplyOptions = {
			pids: "4979976",
			warehouses: 1
		}
		const response = await MigrosAPI.products.productStock.getProductSupply(productSupplyOptions, ".")
		expect(response[0].infiniteSupply).toBe(false);
		expect(response[0].brand).toBe("4979976");
		 */
		expect(null).toBe(null)
	});
});

describe('Check for multiple Products Supplies', () => {
	test('Search for 4963004 and 4979976', async () => {
		/*
		const productSupplyOptions: IProductSupplyOptions = {
			pids: ["4963004", "4979976"],
			warehouses: 1
		}
		const response = await MigrosAPI.products.productStock.getProductSupply(productSupplyOptions, ".")
		expect(response[0].infiniteSupply).toBe(false);
		expect(response[0].pid).toBe("4963004");
		expect(response[1].infiniteSupply).toBe(false);
		expect(response[1].pid).toBe("4979976");
		 */
		expect(null).toBe(null)
	});
});