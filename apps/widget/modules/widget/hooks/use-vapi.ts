'use client'

import Vapi from '@vapi-ai/web'
import { useEffect, useState } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export const useVapi = () => {
  const [vapi, setVapi] = useState<Vapi | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [isConnecting, setConnecting] = useState(false)
  const [isConnected, setConnected] = useState(false)
  const [isSpeaking, setSpeaking] = useState(false)

  useEffect(() => {
    const vapi = new Vapi('20841688-a63f-4edd-b312-8f1fe8bb8f71')
    setVapi(vapi)

    vapi.on('call-start', () => {
      setConnected(true)
      setConnecting(false)
      setMessages([])
    })

    vapi.on('call-end', () => {
      setConnected(false)
      setConnecting(false)
      setSpeaking(false)
    })

    vapi.on('speech-start', () => {
      setSpeaking(true)
    })

    vapi.on('speech-end', () => {
      setSpeaking(false)
    })

    vapi.on('message', message => {
      if (message.type == 'transcript' && message.transcriptType == 'final')
        setMessages(prev => [
          ...prev,
          {
            role: message.role == 'user' ? 'user' : 'assistant',
            content: message.transcript,
          },
        ])
    })

    vapi.on('error', error => {
      console.error(error)
      setConnected(false)
      setConnecting(false)
      setSpeaking(false)
    })

    return () => vapi.stop()
  }, [])

  const startCall = () => {
    setConnecting(true)
    vapi?.start('e54c103e-1f6d-45aa-a26f-e17fc337226e')
  }

  const stopCall = () => {
    setConnecting(false)
    setConnected(false)
    setSpeaking(false)
    vapi?.stop()
  }

  return {
    messages,
    isConnecting,
    isConnected,
    isSpeaking,
    startCall,
    stopCall,
  }
}
