const pull = require('pull-stream')

pull(
  pull.values([1, 2, 3, 4]),
  pull.map( x => 2*x ),
  pull.log( () => console.log('done!') )
)

