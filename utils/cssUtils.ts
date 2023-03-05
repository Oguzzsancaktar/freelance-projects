import map from 'lodash/map'

export const incorporateClasses  = (styles: string[]) => {
  let classesString = ''

  map(styles, (style) => {
    classesString += `${style} `
  })

  return classesString
}
