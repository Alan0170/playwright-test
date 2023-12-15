import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ICustomLogin } from './custom-world'

Given('que o usuário esteja na tela principal', async function (this: ICustomLogin) {
    const page = this.page!
    await page.goto('https://console-hml.skyone.cloud/')
})

When('Clicar em {string}', async function (this: ICustomLogin, opcao: string) {
    const page = this.page!
    const termButton = await page.locator(`a[data-testid="sky-link"]:has-text("${opcao}")`)
    await expect(termButton).toBeVisible()
    await termButton.click()

})

Then('Devo ser redirecionado para tela correspondente', async function (this: ICustomLogin) {
    const page = this.page!
    const selector = 'h1.elementor-heading-title';
    await page.waitForSelector(selector);
    const textContent = await page.textContent(selector);
    expect(textContent?.trim()).toBe('Código de ética e conduta');
  })