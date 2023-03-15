
function Project(name, id) {
    let projectContainer = [id, name, 'Hide']

    const getProjCon = () => projectContainer
    const getProjName = () => name
    const getProjId = () => id

    return {
        getProjId,
        getProjCon,
        getProjName,
    }
}

export default Project