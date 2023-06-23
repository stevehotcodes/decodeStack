import request from 'supertest'
import app from "../app";
import { describe,it,expect } from 'vitest';
import response from 'express'
import { number } from 'joi';
// const testVariable=request(app)

describe('users tests',()=>{
    //get all 
    it('responds with  json file list of users',()=>{
        return request(app).get('/users/all')
        .expect('Content-Type',/json/)
        .expect(201)
        .then((response:request.Response)=>{
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        id:expect.any(String),
                        firstName:expect.any(String),
                        lastName:expect.any(String),
                        userName:expect.any(String),
                        dateName:expect.any(String),
                        github:expect.any(String),
                        iActive:expect.any(number),
                        role:expect.any(String)

                        
                    })
                ])
            )
        })
    })
})