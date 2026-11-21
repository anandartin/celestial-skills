// HomeScreen.kt — sample screen in the Mars skill
package com.marsdesign.ui.theme

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.foundation.Image
import androidx.compose.ui.Alignment
import androidx.compose.ui.res.painterResource
import com.marsdesign.ui.theme.R

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen() {
    Scaffold(
        // The brand logo leads every screen: import the skill's logo SVG as res/drawable/brand_logo.xml (Vector Asset)
        topBar = { TopAppBar(title = { Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) { Image(painterResource(R.drawable.brand_logo), contentDescription = "Mars", modifier = Modifier.height(24.dp)); Text("Mars") } }) },
        floatingActionButton = { ExtendedFloatingActionButton(onClick = {}, containerColor = MaterialTheme.colorScheme.primary) { Text("Try Mars") } },
        bottomBar = {
            NavigationBar {
                NavigationBarItem(selected = true, onClick = {}, icon = {}, label = { Text("Home") })
                NavigationBarItem(selected = false, onClick = {}, icon = {}, label = { Text("Search") })
                NavigationBarItem(selected = false, onClick = {}, icon = {}, label = { Text("Inbox") })
                NavigationBarItem(selected = false, onClick = {}, icon = {}, label = { Text("Profile") })
            }
        }
    ) { padding ->
        Column(Modifier.padding(padding).padding(16.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
            Text("01 / SUPPORT", style = MaterialTheme.typography.labelSmall)
            Text("Support that answers, not deflects.", style = MaterialTheme.typography.headlineMedium)
            Text("Mars reads the whole thread, checks the account and replies with the specific answer — four in five conversations close without a hand-off.", style = MaterialTheme.typography.bodyLarge, color = MaterialTheme.colorScheme.onSurfaceVariant)
            Card(shape = MaterialTheme.shapes.large) { Column(Modifier.padding(16.dp)) { Text("Feature one", style = MaterialTheme.typography.titleMedium); Text("Describe the benefit in one plain sentence.") } }
            Card(shape = MaterialTheme.shapes.large) { Column(Modifier.padding(16.dp)) { Text("Feature two", style = MaterialTheme.typography.titleMedium); Text("Describe the benefit in one plain sentence.") } }
        }
    }
}
