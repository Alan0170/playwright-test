import { IWorldOptions, World, setWorldConstructor } from '@cucumber/cucumber'
import { BrowserContext, Page } from '@playwright/test'

export interface ICustomLogin extends World {
	context?: BrowserContext
	page?: Page
}

export class CustomLogin extends World implements ICustomLogin {
	constructor(options: IWorldOptions) {
		super(options)
	}
}

setWorldConstructor(CustomLogin)