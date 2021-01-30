const smartGrid = require('smart-grid')

const options = {
  filename: '_smart-grid',
  outputStyle: 'sass',
  columns: 12,
  offset: '30px',
  mobileFirst: true,
  container: {
    maxWidth: '1440px',
    fields: '30px'
  },
  breakPoints: {
    lg: {
      width: '1220px',
      fields: '110px',
      offset: '80px'
    },
    md: {
      width: '768px',
      fields: '30px',
      offset: '30px'

    },
    sm: {
      width: '320px',
      fields: 0,
      offset: 0
    }

  },
  mixinNames: {
    container: 'wrapper',
    row: 'row-flex',
    rowFloat: 'row-float',
    rowInlineBlock: 'row-ib',
    rowOffsets: 'row-offsets',
    column: 'col',
    size: 'size',
    columnFloat: 'col-float',
    columnInlineBlock: 'col-ib',
    columnPadding: 'col-padding',
    columnOffsets: 'col-offsets',
    shift: 'shift',
    from: 'from',
    to: 'to',
    fromTo: 'from-to',
    reset: 'reset',
    clearfix: 'clearfix',
    debug: 'debug',
    uRowFlex: 'u-row-flex',
    uColumn: 'u-col',
    uSize: 'u-size'
  },
  tab: '    ',
  defaultMediaDevice: 'screen',
  detailedCalc: false
}

smartGrid('./src/styles', options)
