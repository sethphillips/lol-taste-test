export default function(){
  this.transition(
    this.hasClass('test-animation'),
    this.fromValue(true),
    this.toValue(false),
    this.use('toRight', {duration:500}),
    this.reverse('toRight',{duration:500}),
    this.includingInitialRender()
  );

   this.transition(
    this.hasClass('results-animation'),
    this.fromValue(false),
    this.toValue(true),
    this.use('toRight', {duration:1000}),
    this.reverse('toRight',{duration:1000}),
    this.includingInitialRender()
  );

  this.transition(
    this.hasClass('flavor-animation'),
    this.toValue(true),
    this.use('toDown'),
    this.reverse('toUp'),
  );

  this.transition(
    this.hasClass('form-animation'),
    this.toValue(false),
    this.use('toLeft'),
    this.reverse('toRight'),
  );
}
