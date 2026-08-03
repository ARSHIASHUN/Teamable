const { isInvalidEmail, isEmptyPayload} = require('../validator')

test('valid email', function() {
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        intresting: "testing"
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(false)
})

test('invalid email', function() {
    const testPayload = {
        name: "test name",
        email: "test.email",
        intresting: "testing"
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(true)
})

test('empty payload', function() {
    const testpayload = {}
    const result = isEmptyPayload(testpayload)
    expect(result).toBe(true)
})

test('non-empty payload', function() {
    const testpayload = {
        name: "test name",
        email: "test.email@example.com",
        intresting: "testing"
    }
    const result = isEmptyPayload(testpayload)
    expect(result).toBe(false)
})