/* eslint-disable @typescript-eslint/naming-convention */
import { getRequest } from "../../utils/requests";

import { paths } from "../apiPaths";
import { ILoginCookies } from "../interfaces/cookies";

const url = paths["login"] + "/security/options"

async function getOptionsRequest(url: string, cookies: ILoginCookies): Promise<Record<string, any>> {

	const headers = {
		"accept": "application/json, text/javascript, */*; q=0.01",
		"accept-language": "en-US,en;q=0.9",
		"sec-ch-ua": "\"Chromium\";v=\"106\", \"Microsoft Edge\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-platform": "\"Windows\"",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin",
		"x-csrf-token": cookies.CSRF,
		"x-requested-with": "XMLHttpRequest",
		"Referer": "https://login.migros.ch/account",
		"Referrer-Policy": "same-origin"
	}

	const response = await getRequest(url, {}, headers, cookies)

	return response.body
}

export async function getOptions(cookies: ILoginCookies): Promise<any> {
	return getOptionsRequest(url, cookies)
}