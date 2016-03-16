import test from 'ava'
import miToKm from './'

test('unicorns', t => {
  t.is(miToKm('unicorns'), undefined)
})

test('{}', t => {
  t.is(miToKm({}), undefined)
})

test('[]', t => {
  t.is(miToKm([]), undefined)
})

test('"0"', t => {
  t.is(miToKm('0'), 0)
})

test('"1"', t => {
  t.is(miToKm('1'), 1.609344)
})

test('0', t => {
  t.is(miToKm(0), 0)
})

test('1', t => {
  t.is(miToKm(1), 1.609344)
})
