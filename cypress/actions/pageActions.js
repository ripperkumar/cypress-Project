class PageActions{
 getText(locator){
    return locator.invoke('text');
 }
}

export default PageActions