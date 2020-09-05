import { foo } from '@lib/foo'
import { foo as reexportedFoo } from '@lib'
import { bar } from '@root/bar'
import { baz } from '@baz'
import { Boo } from '@boo'
import { Zoo } from '@lib/zoo'

console.log(foo)
console.log(reexportedFoo)
console.log(bar)
console.log(baz)
console.log(Boo)
console.log(Zoo)