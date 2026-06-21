"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"
import styles from '../style/projectlist.module.css'

const ProjectsImages = [
  {
    src: "/path/to/image1.jpg",
    alt: "Project Image 1",
  },
  {
    src: "/path/to/image2.jpg",
    alt: "Project Image 2",
  },
  {
    src: "/path/to/image3.jpg",
    alt: "Project Image 3",
  },
  // ...add more images as needed
]

const ProjectsNames = [
  "Project One",
  "Project Two",
  "Project Three",
  // ...add more project names as needed
]

function splitTextToLetters(element: HTMLElement) {
  const text = element.innerText
  element.innerHTML = ""
  text.split("").forEach((char) => {
    const span = document.createElement("span")
    span.className = "letter"
    span.innerText = char
    element.appendChild(span)
  })
}

export default function ProjectLists() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const nameRefs = useRef<(HTMLHeadingElement | null)[]>([])
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const imagesContainerRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    // split all headings into spans
    nameRefs.current.forEach((nameHeading) => {
      if (nameHeading) splitTextToLetters(nameHeading)
    })

    const nameElements = nameRefs.current.filter(Boolean);
    if (!nameElements[0]) return

    const defaultLetters = nameElements[0].querySelectorAll(".letter")
    gsap.set(defaultLetters, { y: "100%" })

    const listeners: Array<() => void> = []

    if (window.innerWidth >= 900) {
      imageRefs.current.forEach((img, index) => {
        if (!img) return
        const correspondingName = nameElements[index + 1]
        if (!correspondingName) return
        const letters = correspondingName.querySelectorAll(".letter")

        const mouseEnter = () => {
          gsap.to(img, {
            scale: 2,
            duration: 0.5,
            ease: "power4.out",
          })
          gsap.to(letters, {
            y: "-100%",
            ease: "power4.out",
            duration: 0.75,
            stagger: { each: 0.025, from: "center" },
          })
        }

        const mouseLeave = () => {
          gsap.to(img, {
            scale: 1,
            duration: 0.5,
            ease: "power4.out",
          })
          gsap.to(letters, {
            y: "0%",
            ease: "power4.out",
            duration: 0.75,
            stagger: { each: 0.025, from: "center" },
          })
        }

        img.addEventListener("mouseenter", mouseEnter)
        img.addEventListener("mouseleave", mouseLeave)
        listeners.push(() => {
          img.removeEventListener("mouseenter", mouseEnter)
          img.removeEventListener("mouseleave", mouseLeave)
        })
      })

      const imagesContainer = imagesContainerRef.current
      if (imagesContainer) {
        const mouseEnter = () => {
          gsap.to(defaultLetters, {
            y: "0%",
            ease: "power4.out",
            duration: 0.75,
            stagger: { each: 0.025, from: "center" },
          })
        }
        const mouseLeave = () => {
          gsap.to(defaultLetters, {
            y: "100%",
            ease: "power4.out",
            duration: 0.75,
            stagger: { each: 0.025, from: "center" },
          })
        }
        imagesContainer.addEventListener("mouseenter", mouseEnter)
        imagesContainer.addEventListener("mouseleave", mouseLeave)
        listeners.push(() => {
          imagesContainer.removeEventListener("mouseenter", mouseEnter)
          imagesContainer.removeEventListener("mouseleave", mouseLeave)
        })
      }
    }

    return () => {
      listeners.forEach((remove) => remove())
    }
  }, [])

  return (
    <section className={styles.project} ref={sectionRef}>
      <div className={styles.projectImages} ref={imagesContainerRef}>
        {ProjectsImages.map((img, i) => (
          <div
            className={styles.img}
            key={img.alt}
            ref={el => imageRefs.current[i] = el}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={styles.objectCover}
              style={{ borderRadius: "0.5rem" }}
            />
          </div>
        ))}
      </div>
      <div className={styles.projectNames}>
        {ProjectsNames.map((name, i) => (
          <div
            className={`${styles.name} ${i === 0 ? styles.default : ""}`}
            key={name}
          >
            <h1 ref={el => nameRefs.current[i] = el}>{name}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}
