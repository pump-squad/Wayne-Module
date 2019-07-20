import React from 'react';
import Collapsible from 'react-collapsible';
import moment from 'moment';
import { IoIosThumbsUp } from "react-icons/io";
import { IoIosThumbsDown } from "react-icons/io";

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandButton: false,
      sortSelection: '',
      answered: true
    };
    this.expandQuestion = this.expandQuestion.bind(this);
    this.expandButtonClick = this.expandButtonClick.bind(this);
    this.changeSortSelection = this.changeSortSelection.bind(this);
  }

  expandQuestion(e) {
    this.setState({
      q1: !this.state.q1
    }, () => { console.log(this.state.q1) })
  }

  changeSortSelection(e) {
    this.setState({
      sortSelection: e.target.value
    })
  }

  expandButtonClick() {
    this.setState({
      expandButton: !this.state.expandButton
    })
  }

  render() {
    return (
      <div className='collapsibles'>
        <Collapsible className='QandA' trigger={<div className="titles prodfeat">QUESTIONS AND ANSWERS<span className="plus">+</span></div>}>
          <div className='button-and-sorting'>
            <div className='q-and-a-count'>(4 Questions : 4 Answers)</div>
            <div>
              {this.state.expandButton ? <button className="expand-button" onClick={this.expandButtonClick}><span>-</span></button> : <button className="expand-button" onClick={this.expandButtonClick}><span>+</span></button>}<span className="underline-question">All</span>
              <select onChange={this.changeSortSelection}>
                <option>Sort by</option>
                <option>Featured Questions First</option>
                <option>Most helpful question</option>
                <option>Most helpful answer</option>
                <option>Newest question</option>
                <option>Newest answer</option>
              </select>
            </div>
          </div>
          <div>
            <QuestionContentAnswer product={this.props.product} />
          </div>
          <span></span>
          <button className="new-question">ASK A NEW QUESTION</button>
        </Collapsible>
      </div>
    )
  }
}



const QuestionContentAnswer = (props) => {
  return (
    <div>
      {props.product.questionHeader ? props.product.questionHeader.map((questionHeader, index) => (
        <Question questionHeader={questionHeader} questionContent={props.product.questionContent} answer={props.product.answer} date={props.product.date} age={props.product.age} key={index} />
      )) : null}
    </div>
  )
}

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandQuestion: false
    };
    this.expandQuestionBody = this.expandQuestionBody.bind(this);
  }
  expandQuestionBody() {
    this.setState({
      expandQuestion: !this.state.expandQuestion
    })
  }

  render() {
    return (
      <div>
        <div>
          <div className='question-header-div' onClick={this.expandQuestionBody}>
            <span>-> </span>
            <span className='question-header'>
              {this.props.questionHeader}
            </span>
            <span className='answer-count'>1 answer</span>
          </div>
          <div>
            {this.state.expandQuestion ? <div><QuestionContent questionContent={this.props.questionContent} answer={this.props.answer} date={this.props.date} age={this.props.age} /></div> : null}
            <div className='question-divider'></div>
          </div>
        </div>
      </div>
    )
  }
}

class QuestionContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: false,
      likes: 0,
      dislikes: 0,

    };
    this.helpfulClick = this.helpfulClick.bind(this);
    this.unhelpfulClick = this.unhelpfulClick.bind(this);
  }

  helpfulClick(e) {
    let newLikes = this.state.likes;
    newLikes++;
    this.setState({
      likes: newLikes
    })
  }

  unhelpfulClick() {
    let newDislikes = this.state.dislikes;
    newDislikes++;
    this.setState({
      dislikes: newDislikes
    })
  }

  render() {
    return (
      <div>
        <p className='question-body'>{this.props.questionContent}</p>
        <div className='age-separator'>
          <span className='age-activity1'>Age: </span>
          <span className='age-activity2'>{this.props.age}</span>
        </div>
        <div>
          <span className='age-activity1'>Activity: </span>
          <span className='age-activity2'>Coding</span>
        </div>
        <div className='question-info'>
          <span className='question-asked-elapsed-time'>{moment(this.props.date, "MMDDYYYY").fromNow()}</span>
          <br />
          <span className='question-asked-name'>Steve</span><span className='question-asked-location'>Iceland</span>
        </div>
        <div className='question-thumbs'>
          <span className='thumbs-question'>
            <button onClick={this.helpfulClick}><IoIosThumbsUp />{this.state.likes}</button>
            <button onClick={this.unhelpfulClick}><IoIosThumbsDown />{this.state.dislikes} </button>
          </span>
          <span className='answer-this-question'>Answer this question</span>
        </div>
        <br />
        <div><Answer answer={this.props.answer} /></div>
      </div>
    )
  }
}

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerLikes: 0,
      answerDislikes: 0
    };

    this.likeAnswer = this.likeAnswer.bind(this);
    this.dislikeAnswer = this.dislikeAnswer.bind(this);
  }

  likeAnswer() {
    let newLikes = this.state.answerLikes;
    newLikes++;
    this.setState({
      answerLikes: newLikes
    })
  }

  dislikeAnswer() {
    let newDislikes = this.state.answerDislikes;
    newDislikes++;
    this.setState({
      answerDislikes: newDislikes
    })
  }

  render() {
    return (
      <div>
        <div className='count-separator'>
          <span className='same-question-count'>1</span>
          <span className='separator'> | </span>
          <span className='also-have-question'>I have this question too</span>
        </div>
        <div className='answer-section'>
          <div>
            <h2 className='answer-heading'>ANSWERS</h2>
            <img className='staff-badge' src='https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/staffBadge.jpg' />
          </div>
          <br/>
          {/* <p className="image">image goes here</p> */}
          <div className='answer-body-big'>
            <p className='answer-body-small'>{this.props.answer}</p>
          </div>
          <div className='misc-answer'>
            <div className='time-elapsed'>1 month, 3 weeks ago</div>
            <div className='staff-name'>
              <span>Gabby</span>
              <span className='thumbs-answer'>
                <button onClick={this.likeAnswer}><IoIosThumbsUp /> {this.state.answerLikes} </button>
                <button onClick={this.dislikeAnswer}><IoIosThumbsDown /> {this.state.answerDislikes} </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QandA;