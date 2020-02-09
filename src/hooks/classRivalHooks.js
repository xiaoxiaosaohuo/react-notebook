/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-29 21:48:55
 * @LastEditTime: 2019-11-02 13:12:22
 * @LastEditors: Please set LastEditors
 */
import React, {Component, useState } from "react";

export class Parent extends Component{
    constructor(props){
        super(props);
        this.state={
            userId:'',
        }
    }

    onChange = (e)=>{
        this.setState({
            userId:e.target.value
        })
    }

    render(){
        return(
            <div>
                 <input onChange={this.onChange}></input>
                 <Child userId={this.state.userId}/>
            </div>
           
        )
    }
}
class Child extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            data:{}
        }
        this.mounted = false;
    }

    fetchData = (id)=>{
        this.setState({
            loading:true
        });
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then((json) =>{
            if (this.mounted){
                this.setState({
                    loading:false,
                    data:json
                })
            }
        })
    }


    componentDidMount(){
        this.mounted = true;
        this.fetchData(this.props.userId);
    }

    componentDidUpdate(prevProps){
        if(prevProps.userId !== this.props.userId && this.props.userId){
            this.fetchData(this.props.userId);
        }
    }


    componentWillUnmount(){
        this.mounted = false;
    }

    render(){
        const {data,loading} = this.state;
        return(
            <div>
                <ul>
                {Array.isArray(data)? data.map(item=>{
                    return <li key={item.id}>
                        <strong>{item.username}</strong>
                    </li>
                }):<li> <strong>{data.username}</strong></li>}
                </ul>
                {loading ? <div>loading...</div>: null}
            </div>
            
        )
    }
}


