import { GoogleLogo } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from 'store/auth' 
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import "./Login.css";

type LocationState = {
  from?: string
}

export function LoginPage() {
  const location = useLocation()
  const state = location.state as LocationState
  const navigate = useNavigate()
  const signIn = useAuthStore(state => state.signIn)
  const isAuth = useAuthStore(state => state.isAuth)

  
  useEffect(() => {
    if (state && state.from && isAuth) {
      navigate(state.from)
    }
  }, [isAuth])

  async function handleSignIn() {
    await signIn()
    navigate('/')
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-2">
      <span className="text-center text-2xl font-bold text-text">
       Log in to show your score to other players..
      </span>
      <button
        onClick={handleSignIn}
        className="flex items-center gap-2 rounded-md bg-red-500 px-6 py-4 font-bold text-text shadow-sm transition-colors hover:bg-red-700"
      >
        <GoogleLogo size="20" weight="fill" />
        Login with Google
      </button>
    </div>
  )
}
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSignIn}>
        <Stack gap={3}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              size="lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              size="lg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button size="lg" type="SignIn" disabled={!validateForm()}>
            Login
          </Button>
        </Stack>
      </Form>
    </div>
  );
        }
