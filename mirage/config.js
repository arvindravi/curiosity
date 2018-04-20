export default function() {
  this.namespace = '/api';

  this.get('/questions');

  this.get('/questions/:id');

  this.get('/questions/:id/comments', function(schema, request) {
    const questionId = request.params.id;
    return schema.comment.where({ questionId: questionId });
  });
}
