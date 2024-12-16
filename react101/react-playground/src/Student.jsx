function Student({name, matricule}) {
   // console.log(props);
    return (
        <div className="student">
            <p>{name}</p>
            <p>{matricule}</p>
        </div>
    )
}

export default Student;