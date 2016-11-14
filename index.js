const pull = require('pull-stream')

pull(
  pull.values([1, 2, 3, 4]),
  pull.map( x => 2*x ),
  pull.log( () => console.log('done 1\n') )
)

////

const { values, map, log } = pull

pull(
  values([1, 2, 3, 4]),
  map( x => 2*x ),
  log( () => console.log('done 2\n') )
)


////

const source = values([1, 2, 3, 4])
const double = map( x => 2*x )
const sink = log( () => console.log('done 3\n') )

//pull(
  //source,
  //double,
  //sink
//)

sink(
  double(
    source
  )
)

///
