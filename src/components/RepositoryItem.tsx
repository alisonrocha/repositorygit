interface RepositoryIemProps {
  repository: {
    name: string;
    description: string;
    html_url: string
  }
}

export function RepositoryIem(props: RepositoryIemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>
        Acessar repositórios
      </a>

      <hr />
    </li>
  )
}