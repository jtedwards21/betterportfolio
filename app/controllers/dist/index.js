

var Projects = React.createClass({
　　getInitialState(){
	return{}
  },
  render() {
    return (
      <div className="main">
	<section className="project">
	  <div className="spacer s2"></div>
	  <div id="pin1">
	    <div className="title">Pomodoro Clock</div>
	  </div>
	  <div className="spacer s2"></div>
	</section>
	<section className="project">
	  <div className="spacer s2"></div>
	  <div id="pin1">
	    <div className="title">Calculator</div>
	  </div>
	  <div className="spacer s2"></div>
	</section>
	<script>
	</script>
      </div>
    );
  }


var Portfolio = React.createClass({
　　getInitialState(){
	return{about: false}
  },
  render() {
    return(
　　　　<div className="another-container">
    <div className="portfolio-page">	
      <div className="main-container">
        <ReactCSSTransitionGroup transitionName="dog" transitionEnterTimeout={500}>
        {(this.main) ? <Main /> : <Projects />}
        </ReactCSSTransitionGroup>
      </div>
    </div>
    <div className="down-arrow"　onClick={function(){console.log('g');}}><i className="fa fa-arrow-down"></i></div>
    </div>
    )
  }






var Main = React.createClass({
　　getInitialState(){
	return{about: false}
  },
  showAbout(){
    console.log('g');
      if(this.state.about == false){
	this.setState(about: true);
	$(".background").animate({
          opacity: .5
        }, 1000);
	JQuery(".about").show("slow");
      } else {
	this.setState(about: false);
	JQuery(".background").animate({
          opacity: 0
        }, 1000);
	JQuery(".about").hide("slow");
      }
  },
  render(){
    return (
      <div className="main">
	<div className="left-vertical-text"><span onClick={showAbout.bind(this)}>{(this.about) ?　"close" : "about"}</span></div>
      <div className="right-vertical-text"><span onClick={function(){window.location.href='mailto:1478282482@qq.com';}}>1478282482@qq.com</span></div>
	<div className="name"　onClick={function(){console.log('d')}}>Joshua Edwards</div>
	<div className="post">DIGITAL DESIGNER</div>
      </div>
    );
  }
})


ReactDOM.render(
  <Projecsts />,
  document.getElementById('container')
)