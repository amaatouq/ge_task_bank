import React, { Component } from 'react'
import { CustomButton } from '../components/Button';
import { Input } from '../components/Forms';
import IntroLayout from './IntroLayout'

export default class Username extends Component {
    state = {
        username: ""
    }

    handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { player, onNext } = this.props
        const { username } = this.state

        player.set("username", username)
        onNext()
    }

    render() {
        const {
            hasPrev,
            onPrev,
            onNext,
            hasNext,
        } = this.props

        const { username } = this.state

        return (
            <IntroLayout title="Username" {...this.props}>
                <div>
                    <p>Please enter a username to identify yourself to other players:</p>
                    <form onSubmit={this.handleSubmit}>
                        <Input
                            name="username"
                            onChange={this.handleChange}
                            placeholder="enter username..."
                            value={username}
                            autoComplete="off"
                            required
                            style={{ width: "80%" }}
                        />

                        <br />

                        <div className="flex justify-center flex-wrap-reverse">
                            <CustomButton
                                onClick={onPrev}
                                disabled={!hasPrev}
                                color="secondary"
                                outline
                                style={{ margin: "10px" }}
                            >
                                Previous
                            </CustomButton>

                            <CustomButton
                                type="submit"
                                style={{ margin: "10px" }}
                            >
                                Submit Username
                        </CustomButton>
                        </div>

                    </form>
                </div>
            </IntroLayout >
        )
    }
}
