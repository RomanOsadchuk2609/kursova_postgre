package osadchuk.roman.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import osadchuk.roman.model.TypeOfCover;

@Repository
public interface TypeOfCoverRepository extends JpaRepository<TypeOfCover,Integer> {
}
