import org.springframework.context.annotation.Bean;
import io.github.bucket4j.Bucket;

public class SecurityConfiguration {
    
    @Bean
    public Bucket bucket() {
        return null;
        // return Bucket.builder()
        //     .addLimit(Bandwidth.classic(capacity: 10, Refill.greedy(tokens: 10, Duration.ofMinutes(1))))
        //     .build();
    }
}
