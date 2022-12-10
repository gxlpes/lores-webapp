export const countThings = (thing: any) => {

    if (thing == undefined) return 0;

    let counter = 0;

    for (let i = 0; i < thing.length; i++) {
        counter++;
    }

    return counter;
}