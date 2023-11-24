// Forwarding props
// Using rest operator(After taking out the required props we can bundle the rest of the props inside a single object )
export default function Section({title, children, ...props}){
    return(
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}
// export default function Section({title, id, children}){
//     return(
//         <section id={id}>
//             <h2>{title}</h2>
//             {children}
//         </section>
//     )
// }
// But this is not convinient