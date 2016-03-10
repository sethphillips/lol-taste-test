export default function(){
  this.transition(
    this.hasClass('test-animation'),
    this.fromValue(true),
    this.toValue(false),
    this.use('toRight', {duration:500}),
    this.reverse('toUp',{duration:500}),
    this.includingInitialRender()
  );
}
