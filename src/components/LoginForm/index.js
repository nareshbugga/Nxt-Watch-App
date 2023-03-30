import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  LoginSubContainer,
  LabelHeading,
  ErrorMsg,
  Label,
  Image,
  Input,
  FormContainer,
  LoginButton,
} from './StyledComponent'
import NxtThemeContext from '../../NxtThemeContext/ThemeContext'
import './index.css'

class LoginForm extends Component {
  state = {
    checked: true,
    username: '',
    password: '',
    errorMsg: '',
  }

  onCheck = () => {
    this.setState(prevState => ({checked: !prevState.checked}))
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitSuccess = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  submitFailure = errorMsg => {
    this.setState({errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const LoginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    const {checked, errorMsg} = this.state
    const check = checked ? 'password' : 'text'

    return (
      <NxtThemeContext.Consumer>
        {value => {
          const {theme} = value
          const logoUrl = theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer value={theme}>
              <LoginSubContainer value={theme}>
                <div className="align">
                  <Image src={logoUrl} alt="website logo" />
                </div>
                <FormContainer onSubmit={this.onSubmitForm}>
                  <div>
                    <Label htmlFor="userName" value={theme}>
                      USERNAME
                    </Label>
                    <br />
                    <Input
                      type="text"
                      placeholder="Username"
                      id="userName"
                      onChange={this.onChangeName}
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" value={theme}>
                      PASSWORD
                    </Label>
                    <br />
                    <Input
                      type={check}
                      placeholder="Password"
                      id="password"
                      onChange={this.onChangePassword}
                    />
                  </div>
                  <div className="check-box-container">
                    <input
                      type="checkbox"
                      id="show password"
                      className="check-box"
                      onClick={this.onCheck}
                    />
                    <LabelHeading htmlFor="show password" value={theme}>
                      Show Password
                    </LabelHeading>
                  </div>
                  <div>
                    <LoginButton type="submit">Login</LoginButton>
                  </div>
                  {errorMsg.length === 0 ? null : (
                    <ErrorMsg>*{errorMsg}</ErrorMsg>
                  )}
                </FormContainer>
              </LoginSubContainer>
            </LoginContainer>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }
}

export default LoginForm
