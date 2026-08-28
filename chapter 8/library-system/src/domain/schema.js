// From "Probe the Domain First" - the model this chapter's domain-model
// prompt produced. One Book per title; physical copies are tracked as a
// count. One Loan per borrowed copy; closed when returnedAt is set.
export const schema = {
  Book: { id: 'uuid', title: 'string', author: 'string',
    copies: 'int', tags: 'string[]' },
  Member: { id: 'uuid', name: 'string', email: 'string',
    joinedAt: 'isoDate' },
  Loan: { id: 'uuid', bookId: 'uuid', memberId: 'uuid',
    borrowedAt: 'isoDate', dueAt: 'isoDate',
    returnedAt: 'isoDate | null' }
}
