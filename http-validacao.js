const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function checaStatus(arrayURLs) {
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const res = await fetch(url)
        return res.status
    }))
    return arrayStatus
}


function geraArrayDeURLs(arrayLinks) {
        console.log(arrayLinks)

    return arrayLinks
        .map(objetoLink => {
            Object
                .values(objetoLink).join()
        })
}


async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    // const statusLinks = await checaStatus(links)
    // console.log(statusLinks)
    // return statusLinks;
    return links
}

module.exports = validaURLs