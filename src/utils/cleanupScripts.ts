export default () => {
    const headScripts = document.head.getElementsByTagName('script');
    const headLinks = document.head.getElementsByTagName('link');
  
    const scripts = [];
    const links = [];
    for(const script of headScripts) {
        if(script.src.includes('registration.checkin.no')) {
            scripts.push(script);
        }
    }

    for(const link of headLinks) {
        if(link.href.includes('registration.checkin.no')) {
            links.push(link);
        }
    }
    scripts.forEach(script => {
        document.head.removeChild(script);
    });
    links.forEach(link => {
        document.head.removeChild(link);
    });
}