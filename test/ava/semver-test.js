import test from 'ava'
import semver from 'semver'

test('satisfies: next-pre', t => {
  t.truthy(semver.satisfies('1.0.0-pre.2', '>=1.0.0-pre.1'))
})

test('satisfies: ga', t => {
  t.truthy(semver.satisfies('1.0.0', '>=1.0.0-pre.1'))
})
