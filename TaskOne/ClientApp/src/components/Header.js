import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Header extends Component {
    state = { activeItem: 'Customers' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.props.clickHandler(name);
    }

    render() {
        const { activeItem } = this.state

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item
                        name='React'
                        active={activeItem === 'React'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Customers'
                        active={activeItem === 'Customers'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Products'
                        active={activeItem === 'Products'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Stores'
                        active={activeItem === 'Stores'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Sales'
                        active={activeItem === 'Sales'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </Segment>
        )
    }
}