"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import "./Terminal.css"

interface TerminalProps {
  lang?: "es" | "en"
  autoExecuteHelp?: boolean
}

interface TerminalLine {
  type: "input" | "output" | "error"
  content: string
}

const commands = {
  es: {
    help: `Comandos disponibles:
  about       - Información sobre mí
  experience  - Experiencia profesional
  projects    - Proyectos destacados
  skills      - Habilidades técnicas
  contact     - Información de contacto
  clear       - Limpiar terminal
  help        - Mostrar esta ayuda`,

    about: `Ingeniero Informático | Full Stack Developer + PM
────────────────────────────────────────────────
7 años de experiencia combinando desarrollo de software y gestión de proyectos.
Especializado en crear arquitecturas escalables y liderar equipos técnicos.

🎯 Pasión por la tecnología y la resolución de problemas complejos.`,

    experience: `Experiencia Profesional
────────────────────────────────────────────────
[2021 - Presente] Tech Lead / Project Manager @ Tech Company
  → Liderando equipos de desarrollo
  → Gestión de proyectos estratégicos
  → React, Node.js, AWS, Scrum

[2019 - 2021] Senior Full Stack Developer @ Startup Inc
  → Desarrollo de aplicaciones web escalables
  → Vue.js, Python, Docker, PostgreSQL

[2017 - 2019] Full Stack Developer @ Agency XYZ
  → Soluciones web para clientes corporativos
  → Angular, Java, MySQL`,

    projects: `Proyectos Destacados
────────────────────────────────────────────────
1. E-commerce Platform
   Plataforma con +100k usuarios
   Tech: React, Node.js, MongoDB, Stripe
   
2. Task Management System
   Sistema de gestión para equipos distribuidos
   Tech: Vue.js, Express, PostgreSQL`,

    skills: `Habilidades Técnicas
────────────────────────────────────────────────
Frontend:    React, Vue.js, TypeScript, Astro
Backend:     Node.js, Python, Java, GraphQL
DevOps:      Docker, AWS, CI/CD, Kubernetes
Management:  Scrum, Agile, Jira, Team Leadership`,

    contact: `Contacto
────────────────────────────────────────────────
📧 Email:    tu@email.com
🐙 GitHub:   github.com/tuusuario
💼 LinkedIn: linkedin.com/in/tuusuario
🐦 Twitter:  twitter.com/tuusuario`,
  },
  en: {
    help: `Available commands:
  about       - Information about me
  experience  - Professional experience
  projects    - Featured projects
  skills      - Technical skills
  contact     - Contact information
  clear       - Clear terminal
  help        - Show this help`,

    about: `Computer Engineer | Full Stack Developer + PM
────────────────────────────────────────────────
7 years of experience combining software development and project management.
Specialized in creating scalable architectures and leading technical teams.

🎯 Passionate about technology and solving complex problems.`,

    experience: `Professional Experience
────────────────────────────────────────────────
[2021 - Present] Tech Lead / Project Manager @ Tech Company
  → Leading development teams
  → Managing strategic projects
  → React, Node.js, AWS, Scrum

[2019 - 2021] Senior Full Stack Developer @ Startup Inc
  → Development of scalable web applications
  → Vue.js, Python, Docker, PostgreSQL

[2017 - 2019] Full Stack Developer @ Agency XYZ
  → Web solutions for corporate clients
  → Angular, Java, MySQL`,

    projects: `Featured Projects
────────────────────────────────────────────────
1. E-commerce Platform
   Platform with +100k users
   Tech: React, Node.js, MongoDB, Stripe
   
2. Task Management System
   Management system for distributed teams
   Tech: Vue.js, Express, PostgreSQL`,

    skills: `Technical Skills
────────────────────────────────────────────────
Frontend:    React, Vue.js, TypeScript, Astro
Backend:     Node.js, Python, Java, GraphQL
DevOps:      Docker, AWS, CI/CD, Kubernetes
Management:  Scrum, Agile, Jira, Team Leadership`,

    contact: `Contact
────────────────────────────────────────────────
📧 Email:    your@email.com
🐙 GitHub:   github.com/yourusername
💼 LinkedIn: linkedin.com/in/yourusername
🐦 Twitter:  twitter.com/yourusername`,
  },
}

export default function Terminal({ lang = "es", autoExecuteHelp = false }: TerminalProps) {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: "output",
      content:
        lang === "es"
          ? '> Bienvenido al Portfolio Terminal\n> Escribe "help" para ver los comandos disponibles'
          : '> Welcome to Portfolio Terminal\n> Type "help" to see available commands',
    },
  ])
  const [currentInput, setCurrentInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalEndRef = useRef<HTMLDivElement>(null)
  const terminalContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalContainerRef.current && terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  }, [history])

  useEffect(() => {
    if (autoExecuteHelp) {
      setTimeout(() => {
        executeCommand("help")
      }, 500)
    }
  }, [])

  const typeWriter = (text: string, callback: () => void) => {
    setIsTyping(true)
    let index = 0
    const tempLine: TerminalLine = { type: "output", content: "" }

    setHistory((prev) => [...prev, tempLine])

    const interval = setInterval(() => {
      if (index < text.length) {
        tempLine.content += text[index]
        setHistory((prev) => [...prev.slice(0, -1), { ...tempLine }])
        index++
      } else {
        clearInterval(interval)
        setIsTyping(false)
        callback()
      }
    }, 10)
  }

  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    const commandList = commands[lang] as Record<string, string>

    setHistory((prev) => [...prev, { type: "input", content: `$ ${cmd}` }])

    if (command === "clear") {
      setHistory([])
      return
    }

    if (commandList[command]) {
      typeWriter(commandList[command], () => {})
    } else if (command === "") {
      return
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: "error",
          content:
            lang === "es"
              ? `Comando no reconocido: "${cmd}". Escribe "help" para ver los comandos disponibles.`
              : `Command not recognized: "${cmd}". Type "help" to see available commands.`,
        },
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentInput.trim() && !isTyping) {
      executeCommand(currentInput)
      setCurrentInput("")
    }
  }

  const handleCommandClick = (command: string) => {
    if (!isTyping) {
      executeCommand(command)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="terminal-container">
      <div className="terminal-nav">
        <span className="terminal-nav-label">{lang === "es" ? "Accesos rápidos:" : "Quick access:"}</span>
        <div className="terminal-chips">
          <button className="terminal-chip" onClick={() => handleCommandClick("help")} disabled={isTyping}>
            <span className="chip-prompt">$</span> help
          </button>
          {["about", "experience", "projects", "skills", "contact"].map((cmd) => (
            <button key={cmd} className="terminal-chip" onClick={() => scrollToSection(cmd)}>
              <span className="chip-prompt">$</span> {cmd}
            </button>
          ))}
        </div>
      </div>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button close"></span>
            <span className="terminal-button minimize"></span>
            <span className="terminal-button maximize"></span>
          </div>
          <div className="terminal-title">{lang === "es" ? "usuario@portfolio:~$" : "user@portfolio:~$"}</div>
        </div>

        <div className="terminal-body" ref={terminalContainerRef}>
          {history.map((line, index) => (
            <div key={index} className={`terminal-line terminal-line-${line.type}`}>
              <pre>{line.content}</pre>
            </div>
          ))}

          <form onSubmit={handleSubmit} className="terminal-input-form">
            <span className="terminal-prompt">{lang === "es" ? "usuario@portfolio:~$" : "user@portfolio:~$"}</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              disabled={isTyping}
              placeholder={lang === "es" ? "Escribe un comando..." : "Type a command..."}
              autoFocus
            />
            <span className="cursor"></span>
          </form>

          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  )
}
