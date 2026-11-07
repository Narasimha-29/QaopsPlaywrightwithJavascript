const ExcelJs = require('exceljs');
const {test, expect} = require('@playwright/test');

const workbook = new ExcelJs.Workbook();

async function writeExcelSheet(searchText,replaceText,change,filePath)

{
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcelSheet(worksheet,searchText);
    const cell = worksheet.getCell(output.row,output.column+change.colChange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath);

}

async function readExcelSheet(worksheet,searchText)
{
    let output = {row:-1,column:-1}
    worksheet.eachRow((row, rowNumber) => 
    {
        row.eachCell((cell, colNumber) => 
        {
            if(cell.value === searchText)
            {
                output.row = rowNumber;
                output.column = colNumber;
            }
        })
    })
    return output;
}

// writeExcelSheet("Mango","350",{rowChange:0,colChange:2},"/Users/naras/Downloads/download.xlsx");

test('Upload download excel validation',async({page})=>
{
    const searchText = 'Mango'
    const updatedValue = '350';
    await page.goto("https://rahulshettyacademy.com/upload-download-test/");
    const [downloadPromise] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Download' }).click(),]);
    
    writeExcelSheet(searchText,updatedValue,{rowChange:0,colChange:2},"/Users/naras/Downloads/download.xlsx");
    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles("/Users/naras/Downloads/download.xlsx");
    const textLocator = page.getByText(searchText);
    const desiredvalue = await page.getByRole('row').filter({has:textLocator});
    await expect(desiredvalue.locator("#cell-4-undefined")).toContainText(updatedValue);
})