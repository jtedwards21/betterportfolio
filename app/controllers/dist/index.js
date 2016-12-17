

var Projects = React.createClass({
　　getInitialState(){
	return{}
  },
  makeSlides(){
    
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
	 triggerHook: 'onLeave'
      }
    });

    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 500})
	.setPin("#Pin1")
	.addTo(controller);
    var sceneTwo = new ScrollMagic.Scene({triggerElement: "#trigger2", duration:500})
	.setPin("#Pin2")
	.addTo(controller);
    var sceneThree = new ScrollMagic.Scene({triggerElement: "#trigger3", duration:500})
	.setPin("#Pin3")
	.addTo(controller);

  },
  componentDidMount(){
    this.makeSlides();
  },
  showAbout(){
    this.props.showAbout();
  },
  render() {
    
    return (
      <div className="projects">
　　　　　　　　<section className="intro-page">
	  
	</section>
	<section className="panel">
        　　<div className="spacer s2"></div>
          <div id="trigger1" className="spacer s0"></div>
	  <div id="pin1" className="pin">
		<div className="pin-box">
		　　<div className="project-title">Pomodoro</div>
		  <img src="public/img/project-one.png" className="portfolio-image" />
	　　　　　　　　</div>
	  </div>
        　　<div classNmae="spacer s2"></div>
	</section>
	<section className="panel">
            <div className="spacer s2"></div>
          <div id="trigger2" className="spacer s0"></div>
	  <div id="pin2" className="pin">
		<div className="pin-box">
		　　<div className="project-title">Calculator</div>
		  <img src="public/img/project-two.png" className="portfolio-image" />
	　　　　　　　　</div>
	  </div>
        　　<div classNmae="spacer s2"></div>
	</section>
	<section className="panel">
            <div className="spacer s2"></div>
          <div id="trigger3" className="spacer s0"></div>
	  <div id="pin3" className="pin">
		<div className="pin-box">
		　　<div className="project-title">Dogs</div>
		  <img src="public/img/project-three.png" className="portfolio-image" />
	　　　　　　　　</div>
	  </div>
        　　<div classNmae="spacer s2"></div>
	</section>
      </div>
    );
  }
});


var Portfolio = React.createClass({
　　getInitialState(){
	return{about: false, page: "main"}
  },
  handleArrowClick(){
    switch(this.state.page){
      case "main":
        this.setState({page: "projects"});
	break;
      case "projects":
	this.setState({page: "main"});
	break;
    }
  },
  showAbout(){
    console.log("show About");
    $("#background").css("z-index","3");
    $("#background").animate({
	opacity: .5
    }, 1000);
  },
  render() {
    var content;
    
    switch(this.state.page){
      case "main":
        content = <Main handleArrowClick={this.handleArrowClick} showAbout={this.showAbout} about={this.state.about} />;
	break;
      case "projects":
	content = <Projects showAbout={this.showAbout} />;
	break;
    }

    return(<div id="portfolio">{content}</div>)
  }

})

var Main = React.createClass({
  getInitialState(){
    return{}
  },
  nameClick(){
    console.log('clicked');
  },
  emailClick(){
    window.location.href='mailto:1478282482@qq.com';
  },
  render(){
     return(
     <div className="main">
	<div className="left-vertical-text"><span onClick={this.props.showAbout}>{(this.props.about) ?　"close" : "about"}</span></div>
	<div className="right-vertical-text"><span onClick={this.emailClick}>1478282482@qq.com</span></div>
	<div className="main-text-container">
	  <div className="name"　onClick={this.nameClick}>Joshua Edwards</div>
	  <div className="post">DIGITAL DESIGNER</div>
	</div>
	<img className="down-arrow" src="public/img/triangle.png"　onClick={this.props.handleArrowClick} />
     </div>
	)
  }
})




var About = React.createClass({
　　getInitialState(){
	return{}
  },
  render(){
	return(
	  <div className="about">
            <div className="title">Hello,</div>
            <div className="sub-title">we are a web development firm in blablabla</div>
            <div className="plain-text">Here are some of our awards and other stuff</div>
          </div>
        )
  }


})

ReactDOM.render(
  <Portfolio />,
  document.getElementById('container')
)
